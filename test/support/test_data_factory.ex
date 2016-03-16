defmodule Feedoc.TestDataFactory do
  use ExMachina.Ecto, repo: Feedoc.Repo

  alias Feedoc.Team
  alias Feedoc.Group
  alias Feedoc.Post

  def factory(:team) do
    %Team{
      name: "test.example.com"
    }
  end

  def factory(:group) do
    %Group{
      name: "example group"
    }
  end

  def factory(:post) do
    %Post{
      title: "example title",
      content: "#Markdown"
    }
  end
end
