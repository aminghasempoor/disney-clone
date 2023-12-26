import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {Button} from "@mui/material";
import {useRouter} from "next/navigation";

const CreateAccount = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/login')
    }

    return(
        <Button onClick={handleClick}>
            <PersonOutlineIcon/>
        </Button>
    )
}
export default CreateAccount