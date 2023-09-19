import React from "react"

function FormRegister (){
    return (
        <>
            <section className="login-page px-4 mb-36" id="Login">
        <div className="container">
  
          <div className="flex items-center justify-center">
  
            <div className="w-1/2 p-10">
              <img src="./assets/jumping.png" alt="" width="100%" />
  
            </div>
            <div className="w-1/2 p-20">
              <div className="w-full border-2 px-16 p-5">
  
                <h1 className="m-3 text-lg text-blue-700 font-medium">tokoku</h1>
                <input type="text" placeholder="Username or Email" className="bg-slate-100 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-3" />
                <input type="password" placeholder="Password" className="bg-slate-100 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-3" />
                <button className="w-full py-2 my-4 text-white bg-blue-500">Masuk</button>
                <center><h4 >lupa password?</h4></center>
              </div><br /> 
              <div className="w-full border-2 px-16 py-5 ">
                <center><h1 className="text-lg">Belum punya Akun? <a href="" className="text-blue-300">Daftar</a></h1></center>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default FormRegister