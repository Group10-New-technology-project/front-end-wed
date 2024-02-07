import SearchContact from '~/layouts/components/SearchContact';
import Group from '~/layouts/components/SidebarGroup/Group';

function SidebarGroup() {
    return (
        <div>
            <h3>Nhóm (10)</h3>
            <br />
            <div>
                <SearchContact /> <br />
                <Group />
                <Group />
                <Group />
            </div>
        </div>
    );
}

export default SidebarGroup;
