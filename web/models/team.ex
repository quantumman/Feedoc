defmodule Feedoc.Team do
  use Feedoc.Web, :model

  schema "teams" do
    field :name, :string
    has_many :groups, Feedoc.Group
    has_many :posts, Feedoc.Post

    timestamps
  end

  @required_fields ~w(name)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
    |> validate_format(:name, ~r/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}$/)
    |> unique_constraint(:name)
  end
end
