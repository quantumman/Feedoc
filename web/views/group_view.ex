defmodule Feedoc.GroupView do
  use Feedoc.Web, :view

  def render("index.json", %{groups: groups}) do
    render_many(groups, Feedoc.GroupView, "group.json")
  end

  def render("show.json", %{group: group}) do
    render_one(group, Feedoc.GroupView, "group.json")
  end

  def render("group.json", %{group: group}) do
    %{id: group.id,
      name: group.name,
      team_id: group.team_id}
  end
end
