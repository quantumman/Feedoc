defmodule Feedoc.PostControllerTest do
  use Feedoc.ConnCase

  alias Feedoc.TestDataFactory, as: Factory
  alias Feedoc.Post
  @valid_attrs %{content: "some content", title: "some content"}
  @invalid_attrs %{content: nil, title: nil}

  setup %{conn: conn} do
    team = Factory.create(:team)
    group = Factory.create(:group, %{team_id: team.id})
    {:ok, conn: put_req_header(conn, "accept", "application/json"), team: team, group: group}
  end

  test "lists all entries on index", %{conn: conn, team: team, group: group} do
    conn = get conn, team_group_post_path(conn, :index, team.id, group.id)
    assert json_response(conn, 200) == []
  end

  test "shows chosen resource", %{conn: conn, team: team, group: group} do
    post = Factory.create(:post, group_id: group.id, team_id: team.id)
    conn = get conn, team_group_post_path(conn, :show, team.id, group.id, post)
    assert json_response(conn, 200) == %{
      "id" => post.id,
      "title" => post.title,
      "content" => post.content,
      "group_id" => post.group_id,
      "creator" => %{"avatar" => "http://www.gravatar.com/avatar/00000000000000000000000000000000",
      "name" => "dummy"}
    }
  end

  test "does not show resource and instead throw error when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, team_group_post_path(conn, :show, -1, -1, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn, team: team, group: group} do
    params = Map.merge(@valid_attrs, %{team_id: team.id, group_id: group.id})
    conn = post conn, team_group_post_path(conn, :create, team.id, group.id, params), @valid_attrs
    assert json_response(conn, 201)["id"]
    assert Repo.get_by(Post, params)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn, team: team, group: group} do
    conn = post conn, team_group_post_path(conn, :create, team.id, group.id), @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn, team: team, group: group} do
    post = Factory.create(:post, group_id: group.id, team_id: team.id)
    conn = put conn, team_group_post_path(conn, :update, team.id, group.id, post.id), @valid_attrs
    assert json_response(conn, 200)["id"] == post.id
    assert %{content: content, title: title} = Repo.get_by(Post, @valid_attrs)
    assert %{content: content, title: title} == @valid_attrs
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn, team: team, group: group} do
    post = Factory.create(:post, group_id: group.id, team_id: team.id)
    conn = put conn, team_group_post_path(conn, :update, team.id, group.id, post.id), @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn, team: team, group: group} do
    post = Factory.create(:post, group_id: group.id, team_id: team.id)
    conn = delete conn, team_group_post_path(conn, :delete, team.id, group.id, post)
    assert response(conn, 204)
    refute Repo.get(Post, post.id)
  end
end
