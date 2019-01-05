class Combat < ApplicationRecord
  belongs_to :user
  has_many :combatants, dependent: :destroy
end
