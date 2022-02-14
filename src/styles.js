import styled from "styled-components";

export const AppHeader = styled.div`
    
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap');

    * {
        font-family: 'Red Hat Display';
    }
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    border: 1px solid black;

    .header-logo {
        display: flex;
        align-items: center;
        padding: 10px;
    }

    .header-logo img {
        height: 40px;
        width: 40px;
        padding: 0 15px;
    }

    .header-links {
        display: flex;
    }

    .header-links ul {
        display: flex;
        list-style-type: none;
    }

    .header-links li {
        margin-left: 15px;
    }

    .header-buttons button {
        margin-left: 20px;
        padding: 5px;
    }

    .avatar {
        display: flex;
        align-items: center;
        padding: 0 10px;
    }

    .avatar img {
        height: 40px;
    }

`