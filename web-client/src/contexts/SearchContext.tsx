import React, { useState, useEffect, ReactChild } from 'react'
import useDebouncer from '../customhooks/useDebouncer'

type User = {
	pseudo: string
}

type UserSearchContextProps = {
	searchValue: string
	setSearchValue: React.Dispatch<React.SetStateAction<string>>
	searchedUsers: User[]
	loading: boolean
}

export const UserSearchContext = React.createContext<Partial<UserSearchContextProps>>({})

interface IProps {
	children: ReactChild[]
}

const UserSearchProvider: React.FC<IProps> = (props: IProps) => {
	
	const { setDebouncer, cancelDebouncer } = useDebouncer()
	const [searchValue, setSearchValue] = useState<string>('')
	const [searchedUsers, setSearchedUsers] = useState<User[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	const getUsersBySearch = () => {
		const users: User[] = []
		try {
		setLoading(true)
		//useQuery
				setSearchedUsers(
					users.filter((u) => u.pseudo.includes(searchValue)),
				)
		setLoading(false)
		}	catch(err) {
				console.log('an error occured', err)
				setLoading(false)
			}
	}
	
	useEffect(() => {
		if (searchValue && searchValue?.trim().length > 0) {
			setDebouncer(500, () => getUsersBySearch())
		} else {
			setSearchedUsers([])
		}
		return () => cancelDebouncer()
	}, [searchValue])

	// Render
	// ----------------------------------------------------------------------------

	return (
		<UserSearchContext.Provider value={{ searchValue, setSearchValue, searchedUsers, loading }}>
			{props.children}
		</UserSearchContext.Provider>
	)
}

export default UserSearchProvider
