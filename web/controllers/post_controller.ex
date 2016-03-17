defmodule Feedoc.PostController do
  use Feedoc.Web, :controller

  alias Feedoc.Post

  plug :scrub_params, "team_id"
  plug :scrub_params, "group_id"
  plug :scrub_params, "id"  when action in [:show, :update, :delete]

  def index(conn, params) do
    posts = Repo.all(Post.belongs_to(params))
    render(conn, "index.json", posts: posts)
  end

  def create(conn, %{"team_id" => team_id, "group_id" => group_id} = params) do
    changeset = Post.changeset(%Post{}, params)

    case Repo.insert(changeset) do
      {:ok, post} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", team_group_post_path(conn, :show, team_id, group_id, post))
        |> render("show.json", post: post)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Feedoc.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id, "team_id" => team_id, "group_id" => group_id}) do
    post = Repo.get_by!(Post, %{id: id, team_id: team_id, group_id: group_id})
    render(conn, "show.json", post: post)
  end

  def update(conn, %{"id" => id, "team_id" => team_id, "group_id" => group_id} = params) do
    post = Repo.get_by!(Post, %{id: id, team_id: team_id, group_id: group_id})
    changeset = Post.changeset(post, params)

    case Repo.update(changeset) do
      {:ok, post} ->
        render(conn, "show.json", post: post)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Feedoc.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id, "team_id" => team_id, "group_id" => group_id}) do
    post = Repo.get_by!(Post, %{id: id, team_id: team_id, group_id: group_id})

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(post)

    send_resp(conn, :no_content, "")
  end
end
