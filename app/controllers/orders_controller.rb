class OrdersController < ApplicationController
  def new
  	@order = Order.new

  end


  def create

    @order = Order.new(order_params)
    if @order.save
      redirect_to thankyou_path, notice: ""
    else
      flash[:danger] = '請輸入您的資料！謝謝'
      redirect_to new_order_path, notice: ""
    end
  end


  private
    def order_params
      params.require(:order).permit(:name, :email, :phone)
    end

 
end