# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Feedoc.Repo.insert!(%Feedoc.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Feedoc.Team
alias Data.Factory

defmodule Helper do
  use Feedoc.Web, :controller

  defp seed(nil) do
    team = Factory.create(:team, %{name: "E2E TEST"})
    groups = Enum.map 1..10, fn(_) -> Factory.create(:group, %{team_id: team.id}) end
    Enum.each groups, fn(group) ->
      Enum.each 1..20, fn(_) ->
        Factory.create(:post, group_id: group.id, team_id: team.id)
      end
    end

    IO.inspect team.id
  end
  defp seed(team) do
    IO.inspect team.id
  end

  def run() do
    team = Repo.get_by(Team, %{name: "e2e"})
    seed(team)
  end
end

{:ok, _} = Application.ensure_all_started(:ex_machina)
Faker.start

Helper.run()
