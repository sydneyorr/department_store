# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Department.destroy_all

cl = Department.create(name:"Clothing")
ki = Department.create(name:"Kitchen")
ga = Department.create(name:"Garden")

cl.items.create(name:"shirt")
cl.items.create(name:"pants")

ki.items.create(name:"bowl")
ki.items.create(name:"plate")

ga.items.create(name:"shovel")
ga.items.create(name:"plant")
