defmodule Feedoc.TeamControllerTest do
  use Feedoc.ConnCase

  alias Data.Factory
  alias Feedoc.Team
  @valid_attrs %{name: "some content"}
  @invalid_attrs %{name: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    teams = Enum.map 1..4, fn(_) -> Factory.create(:team) end
    conn = get conn, team_path(conn, :index)
    assert json_response(conn, 200) == Enum.map teams, &to_response(&1)
  end

  test "shows chosen resource", %{conn: conn} do
    _ = Factory.create(:team)
    team = Factory.create(:team)
    _ = Factory.create(:team)
    conn = get conn, team_path(conn, :show, team)
    assert json_response(conn, 200) == to_response team
  end

  test "does not show resource and instead throw error when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, team_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, team_path(conn, :create), @valid_attrs
    assert json_response(conn, 201)["id"]
    assert Repo.get_by(Team, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, team_path(conn, :create), @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    _ = Factory.create(:team)
    team = Factory.create(:team)
    _ = Factory.create(:team)
    conn = put conn, team_path(conn, :update, team), @valid_attrs
    assert json_response(conn, 200)["name"] == @valid_attrs[:name]
    assert Repo.get_by(Team, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    team = Factory.create(:team)
    conn = put conn, team_path(conn, :update, team), @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    team = Factory.create(:team)
    conn = delete conn, team_path(conn, :delete, team)
    assert response(conn, 204)
    refute Repo.get(Team, team.id)
  end

  defp to_response(team) do
    %{
      "id" => team.id,
      "name" => team.name
    }
  end
end
