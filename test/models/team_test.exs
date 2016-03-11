defmodule Feedoc.TeamTest do
  use Feedoc.ModelCase

  alias Feedoc.Team

  @valid_attrs %{name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Team.changeset(%Team{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Team.changeset(%Team{}, @invalid_attrs)
    refute changeset.valid?
  end
end
