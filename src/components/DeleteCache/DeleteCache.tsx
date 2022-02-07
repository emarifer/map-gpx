import classNamesBind from 'classnames/bind';
import { HiRefresh } from 'react-icons/hi';
import Swal from 'sweetalert2';

import common from '../../app.module.scss';
import styles from './styles.module.scss';
import 'sweetalert2/dist/sweetalert2.min.css';

export const DeleteCache = () => {
	const cache = classNamesBind({
		[common.buttons]: true,
		[styles.cache]: true,
	});

	const handleDeleteCache = () => {
		Swal.fire({
			icon: 'warning',
			title: 'Confirmación de eliminación de caché de mapa…',
			text: 'Si no tienes conexión, perderás tus datos',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ok, bórralo!',
			cancelButtonText: 'Cancelar',
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
		<button className={cache} onClick={handleDeleteCache} title="Borrar Cache">
			<HiRefresh />
		</button>
	);
};
