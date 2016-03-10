use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
config :feedoc, Feedoc.Endpoint,
  secret_key_base: "7oEt0hf/qe42d/iYnsUIMw8tiZk2Kc1d6uPmQ3ZZ/q8MfpCxOQAdzvzxScsQHg7t"

# Configure your database
config :feedoc, Feedoc.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "feedoc_prod",
  pool_size: 20
