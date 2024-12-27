import { useEffect } from "react";


const Success = () => {
  useEffect(() => {
    // SweetAlert2 ko load karna jab page load ho
    window.Swal.fire({
      title: "Payment Successfull!",
      icon: "success",
      draggable: true
    });
  }, []);
  return (
    <div>
      <h2 style={{textAlign:'center',margin:"10px"}}>Thank You Soo Much!</h2>
    </div>
  )
}

export default Success
