// pages/CheckoutPage.js
import React, { useState } from 'react';
import { useRouter } from '../hooks/useRouter';
import { useCart } from '../hooks/useCart';

const CheckoutPage = () => {
  const { navigate } = useRouter();
  const { cart, getCartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [orderNumber, setOrderNumber] = useState('');

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const subtotal = getCartTotal();
  const shipping = 0;
  const total = subtotal + shipping;

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Generate order number
    const orderNum = 'WS' + Math.floor(Math.random() * 10000000);
    setOrderNumber(orderNum);
    setStep(3);
    clearCart();
  };

  // Step 3: Confirmation
  if (step === 3) {
    const estimatedDelivery = new Date();
    estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);
    const deliveryDate = estimatedDelivery.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });

    return (
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <span className="ml-2 text-sm text-gray-600">Information</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <span className="ml-2 text-sm text-gray-600">Payment</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <span className="ml-2 text-sm font-semibold">Confirmation</span>
            </div>
          </div>

          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 mb-6">
              <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Order Confirmed</h1>
            <p className="text-gray-600">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-white border border-gray-200 p-6 mb-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Order Number</p>
                <p className="text-xl font-bold">{orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Estimated Delivery</p>
                <p className="text-lg font-semibold">{deliveryDate}</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
            <p className="text-sm text-gray-700 mb-2">
              A confirmation email has been sent to your email address.
            </p>
            <p className="text-sm text-gray-700">
              You will receive shipping updates as your order is processed.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/shop')}
              className="flex-1 bg-black text-white py-4 font-bold hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex-1 border-2 border-gray-300 py-4 font-bold hover:border-black transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="flex justify-center items-center gap-4 mb-8 sm:mb-12">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full ${step >= 1 ? 'bg-yellow-400' : 'bg-gray-300'} flex items-center justify-center`}>
              <span className="text-white font-bold">{step > 1 ? '✓' : '1'}</span>
            </div>
            <span className="ml-2 text-sm font-semibold">Information</span>
          </div>
          <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-yellow-400' : 'bg-gray-300'}`}></div>
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full ${step >= 2 ? 'bg-yellow-400' : 'bg-gray-300'} flex items-center justify-center`}>
              <span className="text-white font-bold">2</span>
            </div>
            <span className="ml-2 text-sm text-gray-600">Payment</span>
          </div>
          <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-yellow-400' : 'bg-gray-300'}`}></div>
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full ${step >= 3 ? 'bg-yellow-400' : 'bg-gray-300'} flex items-center justify-center`}>
              <span className="text-white font-bold">3</span>
            </div>
            <span className="ml-2 text-sm text-gray-600">Confirmation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping Information */}
            {step === 1 && (
              <form onSubmit={handleShippingSubmit} className="bg-white p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>

                {/* Contact */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-4">Contact</h3>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                  />
                </div>

                {/* Shipping Address */}
                <div>
                  <h3 className="font-semibold mb-4">Shipping Address</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        required
                        value={shippingInfo.firstName}
                        onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                        className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        required
                        value={shippingInfo.lastName}
                        onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                        className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Address"
                      required
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="City"
                        required
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                        className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        required
                        value={shippingInfo.state}
                        onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                        className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        required
                        value={shippingInfo.zipCode}
                        onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                        className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      />
                      <input
                        type="text"
                        placeholder="Country"
                        required
                        value={shippingInfo.country}
                        onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
                        className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 font-bold mt-8 hover:bg-gray-800 transition-colors"
                >
                  Continue to Payment
                </button>
              </form>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <form onSubmit={handlePaymentSubmit} className="bg-white p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

                <div className="bg-gray-50 border border-gray-200 p-4 mb-6 flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-gray-700">
                    Your payment information is encrypted and secure.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Card Information</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      required
                      value={paymentInfo.cardNumber}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                    />
                    <input
                      type="text"
                      placeholder="Cardholder Name"
                      required
                      value={paymentInfo.cardName}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cardName: e.target.value})}
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        required
                        value={paymentInfo.expiryDate}
                        onChange={(e) => setPaymentInfo({...paymentInfo, expiryDate: e.target.value})}
                        className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        required
                        value={paymentInfo.cvv}
                        onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
                        className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button
                    type="submit"
                    className="flex-1 bg-black text-white py-4 font-bold hover:bg-gray-800 transition-colors"
                  >
                    Complete Order
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-gray-300 py-4 font-bold hover:border-black transition-colors"
                  >
                    Back to Shipping
                  </button>
                </div>

                <p className="text-xs text-center text-gray-600 mt-6">
                  By completing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              {/* Products */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{item.name}</p>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;