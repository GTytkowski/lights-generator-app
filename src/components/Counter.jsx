
import { Text } from "./Text"
import { IconAdd } from "./icons/IconAdd"
import { IconMinus } from "./icons/IconMinus"

import styles from "./Counter.module.css"

export const Counter = (props) =>
{

    return (
        <div className={styles.wrapper}>
            <Text>
                {props.value} {props.text}
            </Text>
            <nav>
            <IconMinus onClick = {props.onDecrement} />
            <IconAdd onClick = {props.onIncrement} />
            </nav>
        </div>
    )
}