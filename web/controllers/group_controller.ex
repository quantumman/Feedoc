defmodule Feedoc.GroupController do
  use Feedoc.Web, :controller

  alias Feedoc.Group

  plug :scrub_params, "team_id"
  plug :scrub_params, "id" when action in [:show, :update, :delete]

  def index(conn, %{"team_id" => team_id}) do
    groups = Repo.all(Group.belongs_to(team_id))
    render(conn, "index.json", groups: groups)
  end

  def create(conn, %{"team_id" => team_id} = params) do
    changeset = Group.changeset(%Group{}, params)

    case Repo.insert(changeset) do
      {:ok, group} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", team_group_path(conn, :show, team_id, group))
        |> render("show.json", group: group)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Feedoc.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    group = Repo.get!(Group, id)
    render(conn, "show.json", group: group)
  end

  def update(conn, %{"id" => id} = params) do
    group = Repo.get!(Group, id)
    changeset = Group.changeset(group, params)

    case Repo.update(changeset) do
      {:ok, group} ->
        render(conn, "show.json", group: group)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Feedoc.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id, "team_id" => team_id}) do
    group = Repo.get_by!(Group, %{id: id, team_id: team_id})

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(group)

    send_resp(conn, :no_content, "")
  end
end
