const to_bool = (param) => {
    switch (param) {
        case 1: return true; break;
        case 0: return false; break;
        case "1": return true; break;
        case "0": return false; break;
        case "true": return true; break;
        case "false": return false; break;
        case "TRUE": return true; break;
        case "FALSE": return false; break;
        case true: return true; break;
        case false: return false; break;
        case TRUE: return true; break;
        case FALSE: return false; break;
    }
}

const Prod = {
    to_bool
}

export default Prod