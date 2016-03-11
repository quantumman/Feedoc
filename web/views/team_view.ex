defmodule Feedoc.TeamView do
  use Feedoc.Web, :view

  def render("index.json", %{teams: teams}) do
    render_many(teams, Feedoc.TeamView, "team.json")
  end

  def render("show.json", %{team: team}) do
    render_one(team, Feedoc.TeamView, "team.json")
  end

  def render("team.json", %{team: team}) do
    %{id: team.id,
      name: team.name}
  end
end
