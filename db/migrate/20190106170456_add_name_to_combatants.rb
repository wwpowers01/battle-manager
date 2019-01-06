# frozen_string_literal: true

# Adds name columns to combatants
class AddNameToCombatants < ActiveRecord::Migration[5.2]
  def change
    add_column :combatants, :name, :String
  end
end
