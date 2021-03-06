defmodule Feedoc.GroupTest do
  use Feedoc.ModelCase

  alias Feedoc.Group

  @valid_attrs %{name: "some content", team_id: 1}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Group.changeset(%Group{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Group.changeset(%Group{}, @invalid_attrs)
    refute changeset.valid?
  end
end
