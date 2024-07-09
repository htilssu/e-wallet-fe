import { Link, useNavigate } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import { Checkbox } from "rsuite";

const LoginForm = ({ registerLink }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {};

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
            className=" w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/login_banner.webp")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 w-full flex flex-col justify-center items-center">
            <div className={"text-2xl font-bold"}>Đăng nhập</div>
            <div className="w-full mt-8">
              <div className="mx-auto max-w-xs">
                <div>
                  <input
                    className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mt-3">
                  <input
                    className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="flex mt-2 items-center justify-between ">
                  <div>
                    <Checkbox />
                    <span>Giữ đăng nhập</span>
                  </div>
                  <div>
                    <Link
                      className="hover:text-primary hover:no-underline"
                      to="/forgot-password"
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>
                </div>
                <button className="mt-5 tracking-wide font-semibold bg-primary hover:bg-primaryHover text-white  border border-primary w-full py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-">Sign In</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
