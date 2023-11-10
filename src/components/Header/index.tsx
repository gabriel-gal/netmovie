import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';

export default function Header() {
    return (
        <div className="fixed top-0 left-0 right-0">
            <div className="w-full h-16 flex justify-between items-center bg-cor-primaria">
                <div className='flex flex-row justify-between items-center gap-5 ml-4'>
                    <MenuRoundedIcon
                        fontSize="large"
                        sx={{ color: "white" }}
                    />
                    <Image
                        src="/netmoviesLogo.webp"
                        width={180}
                        height={180}
                        alt="Logo do NetMovies"
                    />
                </div>
                <a href="#" className='flex flex-row justify-between items-center gap-5 mr-5'>
                    <SearchIcon
                        fontSize="large"
                        sx={{ color: "white" }}
                    />
                    <div className='text-white text-base font-bold'>
                        Login <span className='text-yellow-500'>Cadastrar</span>
                    </div>
                </a>
            </div>
        </div>
    )
}