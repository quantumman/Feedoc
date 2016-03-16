defmodule Feedoc.PostTest do
  use Feedoc.ModelCase

  alias Feedoc.Post

  @valid_attrs %{
    content: "some content",
    title: "some content",
    group_id: 1,
    team_id: 2
  }
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Post.changeset(%Post{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Post.changeset(%Post{}, @invalid_attrs)
    refute changeset.valid?
  end
end
