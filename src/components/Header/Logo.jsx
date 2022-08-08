import { Icon } from '@iconify/react';

const Logo = () => {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center border-brand p-10 border-radius-5">
            <Icon icon="uil:list-ul" height="25" width={25} />
            <span className="weight-700 size-20 ml-05">TODO Daily</span>
        </div>
    );
};

export default Logo;
