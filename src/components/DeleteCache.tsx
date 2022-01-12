import { HiRefresh } from 'react-icons/hi';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const DeleteCache = () => {
	const handleDeleteCache = () => {
		Swal.fire({
			icon: 'warning',
			title: 'Confirmation of deleting map cache…',
			text: 'If you don\'t have a connection, you will lose your data',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ok, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				if ('caches' in window) {
					caches
						.delete('cache-map')
						.then((bool) => {
							console.log(bool, 'clear cache-map operation'); // true
						})
						.catch((err) => {
							console.log(err);
						});
				}
			}
		});
	};

	return (
		<button
			title="Delete Cache"
			onClick={handleDeleteCache}
			className="buttons buttons__cache"
		>
			<HiRefresh />
		</button>
	);
};
