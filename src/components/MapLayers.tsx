import { LayersControl, TileLayer } from 'react-leaflet';

export const MapLayers = () => (
	<LayersControl position="topright">
		<LayersControl.BaseLayer checked name="Mapa raster IGN - Spain">
			<TileLayer
				maxZoom={17}
				url="https://tms-mapa-raster.ign.es/1.0.0/mapa-raster/{z}/{x}/{-y}.jpeg"
				attribution='MTN ráster CC BY 4.0 <a href="http://www.ign.es/" target="_blank"><b>ign.es</b></a>'
				crossOrigin={true}
			/>
		</LayersControl.BaseLayer>
		<LayersControl.BaseLayer name="Ortoimagen PNOA - Spain">
			<TileLayer
				url="https://tms-pnoa-ma.ign.es/1.0.0/pnoa-ma/{z}/{x}/{-y}.jpeg"
				attribution='Ortofoto PNOA CC-BY 4.0 <a href="http://www.scne.es" target="_blank"><b>scne.es</b></a>'
				crossOrigin={true}
			/>
		</LayersControl.BaseLayer>
		<LayersControl.BaseLayer name="OpenStreetMap">
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				crossOrigin={true}
			/>
		</LayersControl.BaseLayer>
		<LayersControl.BaseLayer name="OpenTopoMap">
			<TileLayer
				maxZoom={17}
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
				crossOrigin={true}
			/>
		</LayersControl.BaseLayer>
	</LayersControl>
);
