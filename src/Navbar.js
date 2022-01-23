
import React from "react";
import {Link} from "react-router-dom"
import { IconButton } from "@chakra-ui/react"

import {  ImBlog } from "react-icons/im";
import {AiTwotoneHome} from "react-icons/ai";
import {MdPostAdd} from "react-icons/md";
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>
            <IconButton
            as="a"
            href="/"
            aria-label="Github"
            icon={<ImBlog />}
            borderRadius="100%"
            size='lg'
            colorScheme='teal'
            variant='outline'
          />
          
            </h1>
            <div className="links">
          
            <Link to="/create" ><IconButton
            as="a"
            href="/"
            aria-label="Github"
            icon={< MdPostAdd/>}
            borderRadius="100%"
            size='lg'
            colorScheme='teal'
            variant='outline'
          /></Link>
            
            
            <Link to="/"> <IconButton
            as="a"
            href="/"
            aria-label="Github"
            icon={<AiTwotoneHome />}
            borderRadius="100%"
            size='lg'
            colorScheme='teal'
            variant='outline'
          />
            </Link>
            </div>
        </nav>
    );
}

export default Navbar;