import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  OneToMany,
} from 'typeorm';
import { Question } from '../question/question.entity';

@Entity('questionnaire')
export class Questionnaire {
  @PrimaryGeneratedColumn() id: number;

  @Column() title: string;

  @Column({
    name: 'content',
    type: 'text',
  })
  content: string;

  @Column({
    name: 'deadline',
    type: 'timestamp',
    nullable: false,
  })
  deadline: string;

  @Column('enum', {
    enum: [1, 2, 3],
    comment: '1：未发布；2：已发布；3：已结束',
  })
  status: number;

  @Column({
    type: 'timestamp',
    comment: '发布时间',
  })
  onlineTime: string;

  @Column({
    type: 'timestamp',
    comment: '下线时间',
  })
  offlineTime: string;

  @OneToMany(type => Question, question => question.questionnaire)
  questions: Question[];

  @CreateDateColumn() created_at: string;
  @UpdateDateColumn() updated_at: string;
}
