import fontawesome from '@fortawesome/fontawesome-free/js/all.js';
import './icon.html';
import { iconList } from './iconList.js';


Template.icon.helpers ({
	iconName() {
		return iconList && iconList[this.name];
	}
});
