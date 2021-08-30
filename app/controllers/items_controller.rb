class ItemsController < ApplicationController

  before_action :set_department
  before_action :set_item, only: [:show, :edit, :update, :destroy]

  def index
    render component: "Items", props: { department: @department, items: @department.items}
  end

  def show
    render component: "Item", props: { department: @department, item: @item}
  end

  def new
    render component: "NewItem", props: { department: @department}
  end

  def edit
    render component: "EditItem", props: { department: @department, item: @item }
  end

  def create
    @item = @department.items.new(item_params)
    if (@item.save)
    redirect_to department_items_path
    else
    end
  end

  def update
    if @item.update(item_params)
    redirect_to department_items_path
    end
  end

  def destroy
    if @item.destroy
      redirect_to department_items_path
    end
  end


end


private

def item_params
  params.require(:item).permit(:name)
end

def set_department
  @department = Department.find(params[:department_id])
end

def set_item
  @item = @department.items.find(params[:id])
end