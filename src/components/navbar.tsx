import { LogOut, SearchIcon, UserCircle2Icon, X } from "lucide-react"
import Logo from "./logo"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useRef, useState } from "react"
import useFetchBooks from "@/store/getBooks"
import { useNavigate } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"
import useSearchSuggestion from "@/store/searchSuggestion"
import SearchLoading from "./search-loading"
const Navbar = () => {

    const [searchInput, setSearchInput] = useState<string>("")
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
    const searchResultRef = useRef<HTMLDivElement | null>(null);
    const { loading } = useFetchBooks()
    const [openSuggestion, setOpenSuggestion] = useState<boolean>(false)
    const { loading: searchLoading, searchData, getSearchData } = useSearchSuggestion()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
        setOpenSuggestion(true)
        if (e.target.value) {
            getSearchData(e.target.value)
        }
    }

    const handleSubmit = () => {
        navigate({
            pathname: '/search',
            search: `?query=${searchInput}`
        })
        setOpenSuggestion(false)
    }

    const navigate = useNavigate()

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchResultRef.current && !searchResultRef.current.contains(event.target as Node)) {
                setOpenSuggestion(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchResultRef])

    console.log(searchData)
    return (
        <div className="bg-background fixed top-0 left-0 right-0 z-10 shrink-0 px-4 sm:px-6 md:px-10 lg:px-14 shadow-md h-16">
            <div className="flex relative items-center h-full justify-between">
                <Logo />
                <div className={`sm:relative md:min-w-[25rem] sm:min-w-[20rem] ${mobileSearchOpen ? 'absolute top-16 left-0 right-0' : "hidden sm:block"}`}>
                    <div className={`flex w-full items-center`}>
                        <Input onFocus={() => setOpenSuggestion(true)} onChange={handleChange} className='outline-none mr-2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0' type="text" placeholder="Search" />
                        <Button disabled={loading} onClick={handleSubmit} type="submit"><SearchIcon /></Button>
                    </div>
                    {
                        <div
                            ref={searchResultRef}
                            className={`absolute w-full top-full left-0 bg-secondary rounded-lg py-2 px-2 mt-1 ${openSuggestion ? '' : 'hidden'}`}
                        >
                            {searchInput && searchData.length > 0 && !searchLoading ? (
                                searchData.map((search) => (
                                    <div onClick={() =>{
                                        navigate({
                                            pathname: `/search`,
                                            search: `?query=${search.title}`
                                        })
                                        setOpenSuggestion(false)
                                    } } key={search.id} className="py-1 px-2 cursor-pointer hover:bg-primary-foreground rounded-lg">
                                        <h1 className="font-primary">{search.title}</h1>
                                    </div>
                                ))
                            ) : !searchInput ? (
                                <h1>Start typing to search {searchInput}</h1>
                            ) : (
                                <SearchLoading />
                            )}
                        </div>
                    }
                </div>

                <div className="flex items-center gap-x-2">
                    {
                        mobileSearchOpen ?
                            <X onClick={() => setMobileSearchOpen(false)} className="block sm:hidden" /> :
                            <SearchIcon onClick={() => setMobileSearchOpen(true)} className="block sm:hidden" />
                    }

                    <ModeToggle />

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>
                                My Account
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex items-center gap-x-1">
                                <UserCircle2Icon className="text-muted-foreground" />
                                <p className="text-muted-foreground">Profile</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-x-1">
                                <LogOut className="text-muted-foreground" />
                                <p className="text-muted-foreground">Sign out</p>
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}
export default Navbar