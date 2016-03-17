defmodule Feedoc.GroupControllerTest do
  use Feedoc.ConnCase

  alias Feedoc.TestDataFactory, as: Factory
  alias Feedoc.Group
  @valid_attrs %{name: "some content"}
  @invalid_attrs %{name: nil}

  setup %{conn: conn} do
    team = Factory.create(:team)
    {:ok, conn: put_req_header(conn, "accept", "application/json"), team: team}
  end

  test "lists all entries on index", %{conn: conn, team: team} do
    groups = Enum.map 1..5, fn(_) -> Factory.create(:group, %{team_id: team.id}) end
    conn = get conn, team_group_path(conn, :index, team.id)
    assert json_response(conn, 200) == Enum.map groups, &to_response(&1)
  end

  test "shows chosen resource", %{conn: conn, team: team} do
    group = Factory.create(:group, %{team_id: team.id})
    conn = get conn, team_group_path(conn, :show, team.id, group)
    assert json_response(conn, 200) == to_response group
  end

  test "does not show resource and instead throw error when id is nonexistent", %{conn: conn, team: team} do
    assert_error_sent 404, fn ->
      get conn, team_group_path(conn, :show, team.id, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn, team: team} do
    conn = post conn, team_group_path(conn, :create, team.id), @valid_attrs
    assert json_response(conn, 201)["id"]
    assert Repo.get_by(Group, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn, team: team} do
    conn = post conn, team_group_path(conn, :create, team.id), @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn, team: team} do
    group = Factory.create(:group, %{team_id: team.id})
    conn = put conn, team_group_path(conn, :update, team.id, group), @valid_attrs
    assert json_response(conn, 200)["id"]
    assert Repo.get_by(Group, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn, team: team} do
    group = Factory.create(:group, %{team_id: team.id})
    conn = put conn, team_group_path(conn, :update, team.id, group), @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn, team: team} do
    group = Factory.create(:group, %{team_id: team.id})
    conn = delete conn, team_group_path(conn, :delete, team.id, group)
    assert response(conn, 204)
    refute Repo.get(Group, group.id)
  end

  defp to_response(group) do
    %{
      "id" => group.id,
      "team_id" => group.team_id,
      "name" => group.name
    }
  end
end
