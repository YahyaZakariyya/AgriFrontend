import React, { useState } from "react";
import SignupPagePic from "../../assets/SignupPage.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../ContextApi/AuthContext";

export default function SignUp() {
const navigate = useNavigate()
let {signup,user} = useAuth()

    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            confirmPassword: "",
            role: "customer", 
            businessName: "", 
        }
    );


    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Full Name is required";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone Number is required";
            isValid = false;
        } else if (!/^[0-9]+$/.test(formData.phone)) {
            newErrors.phone = "Invalid phone number format";
            isValid = false;
        }

        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
            isValid = false;
        }
        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
            isValid = false;
        }
        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = "Confirm Password is required";
            isValid = false;
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Password do not match";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");
    
        if (!validateForm()) {
            return;
        }

    
        const userData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            password: formData.password,
            role: formData.role,
            ...(formData.role === "seller" && { businessName: formData.businessName }),
        };
        signup(userData)
        navigate("/login")

        // console.log(userData);
        
        // try {
        //     const response = await fetch("http://localhost:3000/api/users/signup", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(userData),
        //     });
    
        //     const responseData = await response.json();
        //     console.log(responseData);
        //     localStorage.setItem('token', responseData.token)
        //     localStorage.setItem('user', JSON.stringify(responseData.user));

    
        //     if (response.ok) {
        //         navigate('/')
        //         setSuccessMessage(responseData.message);
        //         setFormData({
        //             name: "",
        //             email: "",
        //             phone: "",
        //             address: "",
        //             password: "",
        //             confirmPassword: "",
        //             role: "customer",
        //             businessName: "",
        //         });
        //         setErrors({});
        //     } else {
        //         setErrorMessage(`Failed to create user: ${responseData.message}`);
        //     }
        // } catch (error) {
        //     setErrorMessage(`Error creating user: ${error.message}`);
        // }
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-green-200">
            <div className="flex w-full max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Left Side - Agriculture Theme */}
                <div className="hidden lg:block w-1/2 bg-gradient-to-br from-green-700 via-green-600 to-green-500 p-8">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Welcome to Agri Shop!
                    </h2>
                    <p className="text-white mb-6">
                        Your one-stop solution for sustainable farming. Discover
                        tools, fertilizers, and expert guidance to boost your harvest
                        and grow better every season.
                    </p>
                    <img
                        src={SignupPagePic}
                        alt="Agriculture Theme"
                        className="rounded-lg shadow-lg"
                        style={{ width: "600px", height: "500px" }}
                    />
                </div>

                {/* Right Side - Sign Up Form */}
                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-center text-green-800">
                        Create Your Account
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        Sign up to explore the Agri Shop and grow with us!
                    </p>
                    {successMessage && (
                        <div className="text-green-600 mb-4">{successMessage}</div>
                    )}
                    {errorMessage && (
                        <div className="text-red-600 mb-4">{errorMessage}</div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm ${errors.name ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        {/* Email Address */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm ${errors.email ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm ${errors.phone ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                            )}
                        </div>

                        {/* Address */}
                        <div>
                            <label
                                htmlFor="address"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter your address"
                                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm ${errors.address ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.address && (
                                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm ${errors.password ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>

                        {/* For Role Specification */}
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <select
                                name="role"
                                id="role"
                                value={formData.role}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm ${errors.role ? "border-red-500" : "border-gray-300"
                                    }`}
                            >
                                <option value="customer">Customer</option>
                                <option value="seller">Seller</option>
                            </select>
                            {errors.role && (
                                <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                            )}
                        </div>

                        {formData.role === "seller" && (
                            <>
                                <div>
                                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                                        Business Name
                                    </label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        id="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        placeholder="Enter your business name"
                                        className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm ${errors.businessName ? "border-red-500" : "border-gray-300"
                                            }`}
                                    />
                                    {errors.businessName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
                                    )}
                                </div>
                                {/* Add more seller-specific fields here as needed */}
                            </>
                        )}



                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-green-700 text-white font-bold rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-center text-gray-600">
                        Already have an account?{" "}
                        <a href="/login" className="text-green-800 hover:underline">
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}