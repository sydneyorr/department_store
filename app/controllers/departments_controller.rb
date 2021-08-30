class DepartmentsController < ApplicationController

  before_action :set_department, only: [:show, :edit, :update]

  def index
    @departments = Department.all
    render component: "Departments", props: { departments: @departments}
  end

  def new
    render component: "NewDepartment"
  end

  def create
    department = Department.new(department_params)
    if department.save
      redirect_to departments_path
    else
    end
  end

  def show
    department = Department.find(params[:id])
    render component: "Department", props: { department: @department }
  end

  def edit
    # department = Department.find(params[:id])
    render component: "EditDepartment", props: { department: @department }
  end

  def update
    # department = Department.find(params[:id])
    if @department.update(department_params)
      redirect_to departments_path
    else
    end
  end

  def destroy
    Department.find(params[:id]).destroy
      redirect_to departments_path
    end

end

private

def department_params
  params.require(:department).permit(:name)
end

def set_department
  @department = Department.find(params[:id])
end

