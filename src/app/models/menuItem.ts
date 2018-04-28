export class MenuItemViewModel {
    id: number;
    parentId: number;
    name: string;
    iconName: string;
    path: string;
    childs: MenuItemViewModel[] = [];
}

export class MenuItem {
    public static list: MenuItem[] = [
        { id: 1, parentId: null, name: '主页', iconName: 'fa fa-home', path: 'home' },
        { id: 2, parentId: null, name: '产品', iconName: 'fa fa-product-hunt', path: 'product' },
        { id: 3, parentId: null, name: '超级管理', iconName: 'fa fa-university', path: 'superadmin' },
        { id: 4, parentId: null, name: '用户管理', iconName: 'fa fa-university', path: null },
        { id: 5, parentId: 4, name: '权限管理', iconName: 'fa fa-arrows', path: 'permissionadmin' },
        { id: 6, parentId: 4, name: '角色管理', iconName: 'fa fa-users', path: 'roleadmin' },
        { id: 7, parentId: 4, name: '添加用户', iconName: 'fa fa-user-plus', path: 'adduser' }
    ];

    public static tree: MenuItemViewModel[];

    id: number;
    parentId: number;
    name: string;
    iconName: string;
    path: string;
}