defmodule Data.Factory do
  use ExMachina.Ecto, repo: Feedoc.Repo

  alias Feedoc.Team
  alias Feedoc.Group
  alias Feedoc.Post

  def factory(:team) do
    %Team{
      name: Faker.Internet.domain_suffix()
    }
  end

  def factory(:group) do
    %Group{
      name: Faker.Lorem.Shakespeare.En.hamlet()
    }
  end

  def factory(:post) do
    %Post{
      title: Faker.Commerce.En.product_name(),
      content: "#Markdown"
    }
  end
end
