class CreateOrder < ActiveRecord::Migration
  def change
    create_table :orders do |t|
    	 t.string :name
    	 t.string :email
    	 t.string :phone
    end
  end
end
