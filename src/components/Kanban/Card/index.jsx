import React, { useRef, useContext } from 'react'
/* eslint-disable @next/next/no-img-element */

import BoardContext from '../context'

import { Container, Label } from './styles';
import { useDrag, useDrop } from 'react-dnd'

export default function Card({ data, index, listIndex }) {

    const ref = useRef()
    const { move } = useContext(BoardContext)

    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: 'CARD',
        item: {id: data.id, index, listIndex},
        collect: (monitor) => ({
          isDragging: monitor.isDragging()
        })
      }))

      const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor){
            
            const draggedListIndex = item.listIndex
            const targetListIndex = listIndex

            const draggedIndex = item.index
            const targetIndex = index

            if(draggedIndex === targetIndex && draggedListIndex === targetListIndex){
                return
            } 
            
            const targetSize = ref.current.getBoundingClientRect()
            const targetCenter = (targetSize.bottom - targetSize.top) / 2

            const draggedOffset = monitor.getClientOffset()
            const draggedTop = draggedOffset.y - targetSize.top

            if(draggedIndex < targetIndex && draggedTop < targetCenter){
                return
            }
            if(draggedIndex > targetIndex && draggedTop > targetCenter){
                return
            }

            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

            item.index = targetIndex
            item.listIndex = targetListIndex
        }
      })

      dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      { data.user && <img src={data.user} alt=""/> }
    </Container>
  )
}
