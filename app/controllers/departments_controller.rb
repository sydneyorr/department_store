class DepartmentsController < ApplicationController
  def index
    departments = Department.all
    render component: "Departments", props: { departments: departments}
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
    render component: "Department", props: { department: department }
  end

  def edit
    department = Department.find(params[:id])
    render component: "EditDepartment", props: { department: department }
  end

end

private

def department_params
  params.require(:department).permit(:name)
end

def find_department
  @dep = Department.find(params[:id])
end