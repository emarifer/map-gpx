import { LayersControl, TileLayer, WMSTileLayer } from 'react-leaflet';

export const MapLayers = () => (
	<LayersControl position="topright">
		<LayersControl.BaseLayer checked name="Mapa raster IGN - Spain">
			<WMSTileLayer
				layers="mtn_rasterizado"
				url="https://www.ign.es/wms-inspire/mapa-raster"
				attribution='&copy; <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a> contributors'
				crossOrigin={true}
			/>
		</LayersControl.BaseLayer>
		<LayersControl.BaseLayer name="Ortoimagen PNOA - Spain">
			<WMSTileLayer
				layers="OI.OrthoimageCoverage"
				url="https://www.ign.es/wms-inspire/pnoa-ma"
				attribution='PNOA cedido por &copy; <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a> contributors'
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
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
				crossOrigin={true}
			/>
		</LayersControl.BaseLayer>
	</LayersControl>
);
