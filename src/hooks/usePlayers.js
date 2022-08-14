import { useQuery } from 'react-query';
import services from 'services';
import { INITIAL_QUERY_DATA } from 'helpers';

const usePlayers = ({ size, page, searchBy }) => {
	const fetchPlayers = async () => {
		const search = new URLSearchParams({ size, page, searchBy });
		const { data } = await services.get(`/players?${search.toString()}`);
		return data;
	};

	const { isLoading, isError, error, data, isFetching, isPreviousData } =
		useQuery({
			queryKey: ['players', page],
			queryFn: fetchPlayers,
			keepPreviousData: true,
			initialData: INITIAL_QUERY_DATA,
			enabled: false
		});

	return {
		isLoading,
		isError,
		error,
		data,
		isFetching,
		isPreviousData
	};
};

export default usePlayers;
