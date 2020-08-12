import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'user_types' })
export class UserTypes {
  @PrimaryColumn({ name: 'code' }) code: string;
  @Column({ name: 'level' }) level: number;
  @Column({ name: 'title_th' }) titleTH: string;
  @Column({ name: 'title_en', nullable: true }) titleEN: string;
  @Column({ name: 'title_cn', nullable: true }) titleCN: string;
  @Column({ name: 'is_active', default: true }) isActive: boolean;
  @Column({ name: 'is_delete', default: false, select: false }) isDelete: boolean;
  @Column({ name: 'create_by', default: 1, select: false }) createBy: number;
  @Column({ name: 'modify_by', default: 1, select: false }) modifyBy: number;
  @CreateDateColumn({ name: 'create_at', select: false }) createAt: Date;
  @UpdateDateColumn({ name: 'modify_at', update: false, select: false }) modifyAt: Date;
}