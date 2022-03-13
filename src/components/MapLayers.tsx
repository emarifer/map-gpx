import { LayersControl, TileLayer } from 'react-leaflet';

export const MapLayers = () => (
	<LayersControl position="topright">
		<LayersControl.BaseLayer checked name="Mapa raster IGN - Spain">
			<TileLayer
				maxZoom={17}
				url="https://www.ign.es/wmts/mapa-raster?request=getTile&layer=MTN&TileMatrixSet=GoogleMapsCompatible&TileMatrix={z}&TileCol={x}&TileRow={y}&format=image/jpeg"
				attribution='MTN ráster CC BY 4.0 <a href="http://www.ign.es/" target="_blank" rel="noopener noreferrer"><b>ign.es</b></a>'
				crossOrigin={true}
			/>
		</LayersControl.BaseLayer>
		<LayersControl.BaseLayer name="Ortoimagen PNOA - Spain">
			<TileLayer
				url="https://tms-pnoa-ma.ign.es/1.0.0/pnoa-ma/{z}/{x}/{-y}.jpeg"
				attribution='Ortofoto PNOA CC-BY 4.0 <a href="http://www.scne.es" target="_blank" rel="noopener noreferrer"><b>scne.es</b></a>'
				crossOrigin={true}
			/>
		</LayersControl.BaseLayer>
		<LayersControl.BaseLayer name="OpenStreetMap">
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright"  target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				crossOrigin={true}
			/>
		</LayersControl.BaseLayer>
		<LayersControl.BaseLayer name="OpenTopoMap">
			<TileLayer
				maxZoom={17}
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
				url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
				crossOrigin={true}
			/>
		</LayersControl.BaseLayer>
	</LayersControl>
);
