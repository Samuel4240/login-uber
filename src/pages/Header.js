import React from "react";

export default function Header(){
    return(
        <header class="bg-primary altura">
    <div class="bg-black d-flex justify-content-between align-items-center h-100 w-100 px-3">
        <div class="d-flex">
            <a href="#" class="text-decoration-none text-white me-3">Company</a>
            <a href="#" class="text-decoration-none text-white me-3">Safety</a>
            <a href="#" class="text-decoration-none text-white">Help</a>
        </div>

        <div class="d-flex">
            <a href="#" class="text-decoration-none text-white p-1 me-2">Login</a>
            <a href="#" class="text-decoration-none text-black bg-white rounded-pill p-1">Sign Up</a>
        </div>
    </div>
</header>


    )
}