defmodule Feedoc.TeamControllerTest do
  use Feedoc.ConnCase

  alias Data.Factory
  alias Feedoc.Team
  @valid_attrs %{name: "somecontent"}
  @invalid_attrs %{name: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "shows chosen resource", %{conn: conn} do
    _ = Factory.setup(:team)
    team = Factory.setup(:team)
    _ = Factory.setup(:team)
    conn = get conn, team_path(conn, :show, team.name)
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

  defp to_response(team) do
    %{
      "id" => team.id,
      "name" => team.name
    }
  end
end
