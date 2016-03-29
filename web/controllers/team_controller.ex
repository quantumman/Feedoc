defmodule Feedoc.TeamController do
  use Feedoc.Web, :controller

  alias Feedoc.Team

  plug :scrub_params, "name" when action in [:show]

  def create(conn, params) do
    changeset = Team.changeset(%Team{}, params)

    case Repo.insert(changeset) do
      {:ok, team} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", team_path(conn, :show, team))
        |> render("show.json", team: team)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Feedoc.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"name" => name}) do
    team = Repo.get_by!(Team, name: name)
    render(conn, "show.json", team: team)
  end
end
