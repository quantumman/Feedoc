{:ok, _} = Application.ensure_all_started(:ex_machina)

ExUnit.start
Faker.start

Mix.Task.run "ecto.create", ~w(-r Feedoc.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Feedoc.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Feedoc.Repo)

