defmodule Feedoc.TeamTest do
  use Feedoc.ModelCase
  use ExMachina.Ecto, repo: Feedoc.Repo

  alias Feedoc.Team

  @valid_attrs %{name: Faker.Internet.domain_suffix()}
  @invalid_attrs %{}
  @unique_attrs %{name: 'foobar'}

  test "changeset with valid attributes" do
    changeset = Team.changeset(%Team{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Team.changeset(%Team{}, @invalid_attrs)
    refute changeset.valid?
  end

  test "changeset with invalid name attributes" do
    changeset = Team.changeset(%Team{}, %{name: "A B C"})
    refute changeset.valid?

    changeset = Team.changeset(%Team{}, %{name: "foobar.net"})
    refute changeset.valid?
  end

  test "chagneset with unique attribute" do
    Repo.insert(Team.changeset(%Team{}, @unique_attrs))
    {:error, changeset} = Repo.insert(Team.changeset(%Team{}, @unique_attrs))
    refute changeset.valid?
  end
end
